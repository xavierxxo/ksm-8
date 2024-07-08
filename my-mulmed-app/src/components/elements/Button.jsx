function MyButton(props){
    const {children, bg = "blue"} = props
    return(
      <button className={`bg-${bg}-500 hover:bg-gray-500 rounded-md transition-all px-4 py-2`}
    type="submit">
      {children}
    </button>
    )
  }

export default MyButton