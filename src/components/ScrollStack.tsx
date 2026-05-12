import { useEffect, useRef, type ReactNode } from 'react'

interface ScrollStackProps {
  children: ReactNode
  className?: string
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  stackPosition?: string
  scaleEndPosition?: string
  baseScale?: number
  useWindowScroll?: boolean
}

interface ScrollStackItemProps {
  children: ReactNode
  className?: string
}

export function ScrollStackItem({ children, className = '' }: ScrollStackItemProps) {
  return (
    <div className={`scroll-stack-card ${className}`}>
      {children}
    </div>
  )
}

export default function ScrollStack({
  children,
  className = '',
  itemDistance = 220,
  itemScale = 0.02,
  itemStackDistance = 22,
  stackPosition = '20%',
  scaleEndPosition = '13%',
  baseScale = 0.93,
  useWindowScroll = false,
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const stackPositionPx = useRef(0)
  const scaleEndPositionPx = useRef(0)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>('.scroll-stack-card'))
    if (cards.length === 0) return

    const parsePercent = (val: string, total: number) => {
      if (val.endsWith('%')) return (parseFloat(val) / 100) * total
      return parseFloat(val)
    }

    const updateCardTransforms = () => {
      const viewH = window.innerHeight
      stackPositionPx.current = parsePercent(stackPosition, viewH)
      scaleEndPositionPx.current = parsePercent(scaleEndPosition, viewH)

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect()
        const cardTop = rect.top

        if (i === cards.length - 1) {
          card.style.transform = ''
          return
        }

        const threshold = stackPositionPx.current
        const progress = Math.max(0, Math.min(1, (threshold - cardTop) / itemDistance))

        const scale = 1 - itemScale * (cards.length - 1 - i) * progress
        const clampedScale = Math.max(baseScale, scale)
        const translateY = itemStackDistance * (cards.length - 1 - i) * progress

        card.style.transform = `translateY(${translateY}px) scale(${clampedScale})`
        card.style.zIndex = String(i + 1)
      })
    }

    if (useWindowScroll) {
      window.addEventListener('scroll', updateCardTransforms, { passive: true })
      updateCardTransforms()
      return () => window.removeEventListener('scroll', updateCardTransforms)
    }

    const handleScroll = () => updateCardTransforms()
    scroller.addEventListener('scroll', handleScroll, { passive: true })
    updateCardTransforms()
    return () => scroller.removeEventListener('scroll', handleScroll)
  }, [itemDistance, itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, useWindowScroll])

  return (
    <div
      ref={scrollerRef}
      className={`scroll-stack-scroller ${useWindowScroll ? 'window-mode' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
