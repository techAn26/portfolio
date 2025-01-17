import { useState } from 'react'

export const useContactPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ToDo: 送信処理の実装
    // console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const formFields = [
    {
      name: 'title',
      label: '件名',
      type: 'text',
      placeholder: '件名をご入力ください',
      required: true,
    },
    {
      name: 'name',
      label: '氏名',
      type: 'text',
      placeholder: '(例)田中 太朗',
      required: false,
    },
    {
      name: 'email',
      label: 'メールアドレス',
      type: 'email',
      placeholder: '(例)example@email.com',
      required: true,
    },
    {
      name: 'phone',
      label: '電話番号',
      type: 'tel',
      placeholder: '(例)0000-000-0000',
      required: false,
    },
    {
      name: 'message',
      label: 'お問い合わせ内容',
      type: 'textarea',
      placeholder: 'お問い合わせ内容をご入力ください',
      required: true,
    },
  ] as const

  return {
    formData,
    handleSubmit,
    handleChange,
    formFields,
  }
}
