/* ============================================
   ErrorBoundary — Resilient fallback wrapper
   Prevents any 3D/WebGL error from crashing the app
   ============================================ */

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("3D Canvas fallback triggered:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-full flex items-center justify-center text-text-muted text-sm border border-border-glow rounded-2xl p-6 text-center">
            3D interactive preview unavailable. Please use the navigation links.
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
