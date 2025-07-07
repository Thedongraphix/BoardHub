import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    /* Dark Theme (Default) */
    --Background: #070606;
    --surface: #111111;
    --surface-elevated: #1a1a1a;
    --white: #ffffff;
    --text-primary: #ffffff;
    --text-secondary: #bdbdbd;
    --text-muted: #888888;
    --light-gray: #dcdcdc;
    --link-color: #bdbdbd;
    --green: #3498db;
    --emerald: #5dade2;
    --border-color: #3d3d3d;
    --overlay-bg: rgba(7, 6, 6, 0.98);
    --card-bg: #111111;
    --pill-bg: rgba(255, 255, 255, 0.15);
    --pill-border: #989898;
    --scroll-thumb: #bdbdbd;
    --icon-filter: brightness(0) invert(1);
  }

  /* Light Theme */
  [data-theme='light'] {
    --Background: #ffffff;
    --surface: #f8f9fa;
    --surface-elevated: #ffffff;
    --white: #070606;
    --text-primary: #070606;
    --text-secondary: #4a4a4a;
    --text-muted: #888888;
    --light-gray: #2a2a2a;
    --link-color: #4a4a4a;
    --green: #3498db;
    --emerald: #2980b9;
    --border-color: #e1e1e1;
    --overlay-bg: rgba(255, 255, 255, 0.98);
    --card-bg: #ffffff;
    --pill-bg: rgba(52, 152, 219, 0.1);
    --pill-border: #3498db;
    --scroll-thumb: #4a4a4a;
    --icon-filter: brightness(0) invert(0);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: var(--text-primary);
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--scroll-thumb);
        border-radius: 0.5rem;
      }

      &-track {
        background: var(--Background);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .parallax {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .parallax .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: block;
    margin-right: 5rem;
  }

  .not_complete {
    display: none;
  }

  .complete {
  }

  /* Theme transition improvements */
  [data-theme] {
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
