import React from 'react';
import Button from '../common/Button';
import { AlertCircleIcon, RefreshCwIcon } from '../common/Icons';
import './ErrorState.css';

export default function ErrorState({
  title = 'Something went wrong',
  message = "We couldn't load the movies right now. Please check your network connection and try again.",
  onRetry = undefined,
  className = '',
}) {
  return (
    <div className={`sf-error-state ${className}`} role="alert">
      <div className="sf-error-icon-wrapper">
        <AlertCircleIcon size={48} className="sf-error-icon" />
      </div>
      <h3 className="sf-error-title">{title}</h3>
      <p className="sf-error-message">{message}</p>
      <div className="sf-error-action">
        <Button
          variant="primary"
          size="md"
          icon={<RefreshCwIcon size={16} />}
          onClick={onRetry}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
