import React, { useState, useEffect } from 'react';

export const useTypewriter = (words, typingSpeed = 100, pause = 2000) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index % words.length]
    let timeout

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(prev => currentWord.slice(0, prev.length - 1))
      }, typingSpeed / 2)
    } else {
      timeout = setTimeout(() => {
        setText(prev => currentWord.slice(0, prev.length + 1))
      }, typingSpeed)
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setIndex(prev => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  return text
}