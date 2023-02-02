/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme: 'primary' | 'secondary' | 'tertiary';
    /** 버튼의 크기를 설정합니다 */
    size: 'small' | 'medium' | 'big';
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({ children, theme, size, onClick }: ButtonProps) => {
    return (
        <button css={[style, themes[theme], sizes[size]]} onClick={onClick}>
            {children}
        </button>
    );
};

Button.defaultProps ={
    theme : 'primary',
    size : 'medium'
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  letter-spacing: 0.06rem;
  font-weight: 400;
  text-transform: lowercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const themes = {
    primary: css`
    background: #2563eb;
    color: white;
    &:hover {
      background: #3b82f6;
    }
    &:active {
      background: #1d4ed8;
    }
  `,
    secondary: css`
    background: none;
    border:solid 1px #3b82e6;
    color: #2563eb;
    &:hover {
      background: #eff6ff;
    }
    &:active {
      background: #bfdbfe;
    }
  `,
    tertiary: css`
    background: none;
    color: #2563eb;
    &:hover {
      background: #eff6ff;
    }
    &:active {
      background: #bfdbfe;
    }
  `
};

const sizes = {
    small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
    medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
    big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `
};


export default Button;