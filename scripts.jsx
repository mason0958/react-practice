function Application() {
	

	return (
		<div className="application">
			{this.props.message}
		</div>
	)
}

ReactDOM.render(
	
	<Application message="Hello, Classs" />,
	document.getElementById('container')
)