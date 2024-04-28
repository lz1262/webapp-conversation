import React from 'react';
import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
           {/* 添加欢迎文字 */}
            <div>
              <h1>欢迎来到我的网站</h1>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
