import { css } from '@emotion/react'
import { Colors } from '@/consts/Colors'
import { useContactPage } from './hook/useContactPage'

export const Contact = () => {
  const { formData, handleSubmit, handleChange, formFields } = useContactPage()

  const renderField = (field: (typeof formFields)[number]) => {
    const commonProps = {
      name: field.name,
      placeholder: field.placeholder,
      value: formData[field.name],
      onChange: handleChange,
      css: field.type === 'textarea' ? styles.textarea : styles.input,
      required: field.required,
    }

    return (
      <div key={field.name} css={styles.formGroup}>
        <label css={styles.label}>
          {field.label}
          <span css={field.required ? styles.required : styles.optional}>{field.required ? '必須' : '任意'}</span>
        </label>
        {field.type === 'textarea' ? <textarea {...commonProps} /> : <input type={field.type} {...commonProps} />}
      </div>
    )
  }

  return (
    <div css={styles.container}>
      <form css={styles.form} onSubmit={handleSubmit}>
        {formFields.map(renderField)}
        <button type='submit' css={styles.submitButton}>
          送信
        </button>
      </form>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
    max-width: 500px;
    padding: 20px;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  formGroup: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  label: css`
    font-size: 14px;
    color: #111;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  required: css`
    background-color: #ff7676;
    color: #fff;
    padding: 2px 8px;
    font-size: 12px;
    border-radius: 2px;
  `,
  optional: css`
    background-color: #999;
    color: #fff;
    padding: 2px 8px;
    font-size: 12px;
    border-radius: 2px;
  `,
  input: css`
    width: 100%;
    padding: 12px;
    border: 1px solid #bbb;
    border-radius: 4px;
    font-size: 14px;
    &:focus {
      outline: none;
      border-color: ${Colors.main.dark};
    }
  `,
  textarea: css`
    width: 100%;
    height: 200px;
    padding: 12px;
    border: 1px solid #bbb;
    border-radius: 4px;
    resize: vertical;
    font-size: 14px;
    &:focus {
      outline: none;
      border-color: ${Colors.main.dark};
    }
  `,
  submitButton: css`
    width: 120px;
    padding: 12px;
    background-color: ${Colors.main.dark};
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: opacity 0.3s ease;
    margin: 0 auto;

    &:hover {
      opacity: 0.8;
    }
  `,
}
