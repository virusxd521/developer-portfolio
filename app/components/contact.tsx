'use client'

import { useState, useRef } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';


export function Contact() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);
  const [focusedField, setFocusedField] = useState('');
  const MAX_CHARS = 500;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const fieldName = name as keyof typeof formValues;


    if (name === 'message') {
      if (value.length <= MAX_CHARS) {
        setFormValues({ ...formValues, [name]: value });
        setCharCount(value.length);
      }
    } else {
      setFormValues({ ...formValues, [name]: value });
    }

    if (formErrors[fieldName]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formValues.user_name.trim()) {
      newErrors.user_name = 'Name is required';
      isValid = false;
    } else if (formValues.user_name.trim().length < 2) {
      newErrors.user_name = 'Name must be at least 2 characters';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.user_email.trim()) {
      newErrors.user_email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formValues.user_email)) {
      newErrors.user_email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus({
        type: 'success',
        message: `Message sent successfully! I'll get back to you soon.`
      });

      // Reset form values
      setFormValues({ user_name: '', user_email: '', message: '' });
      setCharCount(0);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
        <div className="flex flex-col">
          <div className="mb-10">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-200/20 dark:border-purple-500/20">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                💡 Fun Fact
              </h4>
              <p className="text-purple-700 dark:text-purple-200 text-sm">
                I respond to every message personally. No bots, no templates - just genuine conversation!
              </p>
            </div>
          </div>
          <form ref={form} className="space-y-6" id="contact" onSubmit={handleSubmit}>
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">

              {/* Name Field */}
              <div className="space-y-2 mb-6">
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className={`h-5 w-5 transition-colors ${
                      focusedField === 'user_name' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                  </div>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    value={formValues.user_name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('user_name')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 transition-all duration-200 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm ${
                      formErrors.user_name
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                        : focusedField === 'user_name'
                          ? 'border-blue-300 focus:border-blue-500 focus:ring-blue-500/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    } focus:ring-4 focus:outline-none dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.user_name && (
                  <div className="flex items-center space-x-1 mt-1">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <p className="text-sm text-red-600 dark:text-red-400">{formErrors.user_name}</p>
                  </div>
                )}
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className={`h-5 w-5 transition-colors ${
                      focusedField === 'user_email' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                  </div>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    value={formValues.user_email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('user_email')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 transition-all duration-200 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm ${
                      formErrors.user_email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                        : focusedField === 'user_email'
                          ? 'border-blue-300 focus:border-blue-500 focus:ring-blue-500/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    } focus:ring-4 focus:outline-none dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.user_email && (
                  <div className="flex items-center space-x-1 mt-1">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <p className="text-sm text-red-600 dark:text-red-400">{formErrors.user_email}</p>
                  </div>
                )}
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Message
                  </label>
                  <span className={`text-sm transition-colors ${
                    charCount > MAX_CHARS * 0.9 ? 'text-red-500 font-medium' :
                      charCount > MAX_CHARS * 0.8 ? 'text-amber-500' :
                        'text-gray-400'
                  }`}>
                    {charCount}/{MAX_CHARS}
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className={`h-5 w-5 transition-colors ${
                      focusedField === 'message' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formValues.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    maxLength={MAX_CHARS}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 transition-all duration-200 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm resize-none ${
                      formErrors.message
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                        : focusedField === 'message'
                          ? 'border-blue-300 focus:border-blue-500 focus:ring-blue-500/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    } focus:ring-4 focus:outline-none dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                    placeholder="Tell me about your project, ask a question, or just say hello..."
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.message && (
                  <div className="flex items-center space-x-1 mt-1">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <p className="text-sm text-red-600 dark:text-red-400">{formErrors.message}</p>
                  </div>
                )}
              </div>
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`flex items-center space-x-2 p-4 rounded-xl mb-6 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                // onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed hover:transform-none' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}