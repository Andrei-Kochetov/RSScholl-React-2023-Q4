import { Component, ErrorInfo } from 'react';

type IProps = {
  children?: React.ReactNode;
};
type IState = {
  hasError: boolean;
  error: null | Error;
  errorInfo: null | ErrorInfo;
};
export default class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>An unexpected error has occurred, please reload the page.</h1>;
    }

    return this.props.children;
  }
}
