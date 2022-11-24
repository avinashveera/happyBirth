import React from 'react'

const friendCard = ({ name,phone,whatsapp,facebook,instagram,birthday }) => {

    const style = {
        card: {

            minWidth:"300px",
            maxWidth: "100vw",
            height: "300px",
            border: "1px solid green",
            textDecoration: "none"
            , padding: "20px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "20px",
            boxShadow:
                '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)',

        }
    
    }

    return (
        <div>
            <div style={style.card}>
                <p>name : {name}</p>
                <p>phone : {phone}</p>
                <p>whatsapp : {whatsapp}</p>
                <p>facebook : {facebook}</p>
                <p>instagram : {instagram}</p>
                <p>birthday : {birthday }</p>
            </div>

        </div>
    )
}

export default friendCard