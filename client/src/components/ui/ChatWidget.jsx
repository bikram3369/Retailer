import React, { useState, useRef, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I\'m your AI fashion stylist. How can I help you find the perfect outfit today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
      inputRef?.current?.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputValue?.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "I'd love to help you with that! Based on current trends, I recommend...",
        "Great choice! Here are some styling tips that would work perfectly...",
        "Let me suggest some complementary pieces that would enhance your look...",
        "That\'s a fantastic question! For your body type and style preferences...",
        "I can see you have excellent taste! Consider these options..."
      ];

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponses?.[Math.floor(Math.random() * botResponses?.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      if (!isOpen) {
        setHasNewMessage(true);
      }
    }, 1500);
  };

  const quickActions = [
    { label: 'Style Advice', icon: 'Sparkles' },
    { label: 'Size Guide', icon: 'Ruler' },
    { label: 'Trending Now', icon: 'TrendingUp' },
    { label: 'Color Match', icon: 'Palette' }
  ];

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-150">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-large hover:shadow-xl transition-all duration-300 focus-ring ${
            hasNewMessage ? 'animate-bounce-gentle' : ''
          } ${isOpen ? 'scale-90' : 'hover:scale-105'}`}
        >
          <Icon 
            name={isOpen ? 'X' : 'MessageCircle'} 
            size={24} 
            className="transition-transform duration-200"
          />
          
          {/* New Message Indicator */}
          {hasNewMessage && !isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background animate-pulse">
              <div className="w-full h-full bg-accent rounded-full animate-ping" />
            </div>
          )}
          
          {/* Online Status */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background" />
        </button>
      </div>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-card rounded-lg shadow-large border border-border z-150 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Bot" size={16} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-card-foreground">AI Stylist</h3>
                <p className="text-xs text-success flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-1" />
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-muted transition-smooth focus-ring"
            >
              <Icon name="Minimize2" size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto scrollbar-thin">
            <div className="space-y-4">
              {messages?.map((message) => (
                <div
                  key={message?.id}
                  className={`flex ${message?.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message?.type === 'user' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground'
                    }`}
                  >
                    <p className="text-sm">{message?.content}</p>
                    <p className={`text-xs mt-1 ${
                      message?.type === 'user' ?'text-primary-foreground/70' :'text-muted-foreground/70'
                    }`}>
                      {formatTime(message?.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-border">
            <div className="flex space-x-2 overflow-x-auto scrollbar-thin">
              {quickActions?.map((action) => (
                <button
                  key={action?.label}
                  onClick={() => setInputValue(action?.label)}
                  className="flex items-center space-x-1 px-3 py-1 bg-muted hover:bg-muted/80 rounded-full text-xs text-muted-foreground hover:text-foreground transition-smooth whitespace-nowrap"
                >
                  <Icon name={action?.icon} size={12} />
                  <span>{action?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e?.target?.value)}
                placeholder="Ask me about fashion..."
                className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth text-sm"
              />
              <Button
                type="submit"
                size="sm"
                disabled={!inputValue?.trim()}
                iconName="Send"
                className="px-3"
              />
            </form>
          </div>
        </div>
      )}
      {/* Mobile Chat Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-150 bg-background animate-slide-in-from-bottom">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">AI Fashion Stylist</h3>
                <p className="text-sm text-success flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-1" />
                  Online & Ready to Help
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-muted transition-smooth focus-ring"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Mobile Messages */}
          <div className="flex-1 p-4 overflow-y-auto scrollbar-thin" style={{ height: 'calc(100vh - 140px)' }}>
            <div className="space-y-4">
              {messages?.map((message) => (
                <div
                  key={message?.id}
                  className={`flex ${message?.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      message?.type === 'user' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground'
                    }`}
                  >
                    <p className="text-sm">{message?.content}</p>
                    <p className={`text-xs mt-1 ${
                      message?.type === 'user' ?'text-primary-foreground/70' :'text-muted-foreground/70'
                    }`}>
                      {formatTime(message?.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground px-4 py-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Mobile Quick Actions */}
          <div className="px-4 py-2 border-t border-border">
            <div className="flex space-x-2 overflow-x-auto scrollbar-thin pb-2">
              {quickActions?.map((action) => (
                <button
                  key={action?.label}
                  onClick={() => setInputValue(action?.label)}
                  className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm text-muted-foreground hover:text-foreground transition-smooth whitespace-nowrap"
                >
                  <Icon name={action?.icon} size={14} />
                  <span>{action?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Input */}
          <div className="p-4 border-t border-border bg-background">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e?.target?.value)}
                placeholder="Ask me about fashion, styling, or trends..."
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
              />
              <Button
                type="submit"
                size="default"
                disabled={!inputValue?.trim()}
                iconName="Send"
                className="px-4"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;