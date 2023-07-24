// FaqComponent.js

import React, { useState } from 'react';
import './faq.css'; // Import your CSS file

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: 'What is Netflix?',
      answer:
        'Netflix is a streaming service that offers a wide variety of TV shows, movies, documentaries, and original content available for on-demand streaming to its subscribers.',
    },
    {
      question: 'How do I sign up for Netflix?',
      answer:
        'You can sign up for Netflix by visiting the official website and creating an account. You will need to choose a subscription plan and provide payment information to start your subscription.',
    },
    {
      question: 'Can I watch Netflix on multiple devices?',
      answer:
        'Yes, Netflix allows you to watch content on multiple devices at the same time, depending on your subscription plan. You can watch on TVs, computers, smartphones, tablets, and other supported devices.',
    },
    {
      question: 'Are there ads on Netflix?',
      answer:
        'No, Netflix is an ad-free streaming service. There are no advertisements during the content playback, providing a seamless viewing experience.',
    },
    {
      question: 'Can I download shows and movies on Netflix?',
      answer:
        'Yes, Netflix allows you to download select TV shows and movies to watch offline on your mobile devices. This feature is available on the Netflix app.',
    },
    {
      question: 'How often does Netflix add new content?',
      answer:
        'Netflix regularly updates its content library with new TV shows, movies, and original content. New titles are added on a regular basis, providing a diverse range of entertainment options.',
    },
    // Add more questions and answers as needed
  ];

  return (
    <div className="container">
        <h1 className="header-faq">
            Frequently Asked Questions
        </h1>
        <div className="faq-section container">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-question">
          <h3 onClick={() => toggleAnswer(index)}>
            {faq.question}
            {activeIndex === index ? ' -' : ' +'}
          </h3>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FaqComponent;
