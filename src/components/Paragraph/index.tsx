import React from "react";

interface ParagraphProps  {
    paragraph: string,
    strong?: boolean 
}

const Paragraph = ({paragraph, strong}: ParagraphProps) => {

    return(
        <p>
            <strong>
                {paragraph}
            </strong>
        </p>
    )

}

export default Paragraph;