function TodoList({ children }) {
  return (
    <ul
      style={{
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        marginBottom: '16px',
      }}
    >
      {children}
    </ul>
  )
}

export { TodoList }
