const styleForDesktop = {
  position: 'relative',
  marginBottom: '16px',
  boxShadow: '0 8px 16px -2px rgba(0, 0, 0, 0.5)',
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
}

function TodoList({ children }) {
  return <ul style={styleForDesktop}>{children}</ul>
}

export { TodoList }
