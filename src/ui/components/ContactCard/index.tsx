import React from 'react'

interface ContactCardProps {
  title: string
  detail: React.ReactNode
  icon: React.ReactNode
}

const ContactCard: React.FC<ContactCardProps> = ({ title, detail, icon }) => {
  return (
    <div className="flex flex-col justify-between p-8 border border-gray-200 rounded-2xl shadow-sm font-inter">
      <div className="flex justify-between items-start">
        <h4 className="text-gray-500 text-20px600">{title}</h4>
        <div className="bg-indigo-50 p-2 rounded-md ">
          {icon}
        </div>
      </div>
      <p className="text-black text-30px600">{detail}</p>
    </div>
  )
}

export default ContactCard
