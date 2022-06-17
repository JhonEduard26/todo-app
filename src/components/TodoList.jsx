const styleForDesktop = {
  position: 'relative',
  maxWidth: '460px',
  margin: '0 auto',
  marginBottom: '16px',
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
}

function TodoList({ children }) {
  return <ul style={styleForDesktop}>{children}</ul>
}

export { TodoList }
