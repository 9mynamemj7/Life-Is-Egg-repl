import React from 'react'

function MainComponent() {
  return (
    <div style={{ 
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center' }}>
      <h1>테스트, 테스트</h1>
      <ul style={{ listStyle: 'none' }}>
        <p>나도 한다</p>
        <p>테스트</p>
        <p>너도 해라</p>
      </ul>
    </div>
  )
}

export default MainComponent