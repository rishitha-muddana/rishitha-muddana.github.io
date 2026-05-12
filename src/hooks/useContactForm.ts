import { useState } from 'react'

interface FormState {
  name: string
  email: string
  message: string
}

interface UseContactFormReturn {
  form: FormState
  status: 'idle' | 'loading' | 'success' | 'error'
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  reset: () => void
}

const INITIAL: FormState = { name: '', email: '', message: '' }

export function useContactForm(): UseContactFormReturn {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          // TODO: Replace with your Web3Forms access key from web3forms.com (free, no backend needed)
          access_key: 'YOUR_WEB3FORMS_KEY_HERE',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json() as { success: boolean }
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setForm(INITIAL)
    setStatus('idle')
  }

  return { form, status, handleChange, handleSubmit, reset }
}
