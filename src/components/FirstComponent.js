
const FirstComponent = () => {

    const styles = {
        firsBlock:{
            width: "300px",
            backgroundColor: "red",
            border: "2px solid black",
            padding: "15px",
            textAlign: "center"
    }
    }


    return(
        <div style={styles.firsBlock}>
            <h2>Первый компонент</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aut consequuntur debitis deserunt dolorem ea est incidunt, laudantium pariatur perferendis possimus, quia quo quod reiciendis repudiandae soluta suscipit voluptas.</p>
        </div>
    )
}

export default FirstComponent