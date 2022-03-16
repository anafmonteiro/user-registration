import React from "react";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";

const NotFound = () => {

    return(
        
        <div className="div-notFound">
            <Title title="Ops!"/>
            <Paragraph paragraph="Não conseguimos encontrar a página que está procurando..."/>
            <Button buttonLabel="Voltar para a página inícial"/>
        </div>
        
    )

}

export default NotFound