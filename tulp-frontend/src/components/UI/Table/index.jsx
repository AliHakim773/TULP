import "./styles.css"

const Table = ({ className, users }) => {
  return (
    <div className={`${className} table`}>
      <div className='table-row table-row-head'>
        <div className='table-cell table-cell-head'>#</div>
        <div className='table-cell table-cell-head'>Username</div>
        <div className='table-cell table-cell-head'>Full Name</div>
        <div className='table-cell table-cell-head'>Email</div>
        <div className='table-cell table-cell-head'>Action</div>
      </div>
      {users?.map((user, i) => {
        return (
          <div className='table-row' key={user._id}>
            <div className='table-cell'>{i}</div>
            <div className='table-cell'>{user.username}</div>
            <div className='table-cell'>
              {user.firstName} {user.lastName}
            </div>
            <div className='table-cell'>{user.email}</div>

            <div className='table-cell'>Remove</div>
          </div>
        )
      })}
    </div>
  )
}

export default Table
