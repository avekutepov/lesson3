
const NewComponent = () => {

    const styles = {
        secondBlock:{
            width: "300px",
            backgroundColor: "blue",
            border: "2px solid black",
            padding: "15px",
            textAlign: "center",
            color:"white"
        }
    }

    return (
        <div style={styles.secondBlock}>
            <h2>Pull request компонент</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae blanditiis corporis illo inventore natus odio perferendis possimus quia! Ab asperiores, cumque id non optio quos reiciendis soluta sunt temporibus!</p>
        </div>
    )
}

export default NewComponent
