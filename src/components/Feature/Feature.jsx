import React from 'react'
import './feature.css'

const Feature = ({ title, text, image, button, codeButton }) => (
    <div className="feature__container">
        <div className="feature__container-all">
            <div className="feature__container-info">
                <div className="frame-text">
                    <div className="feature__container-title">
                        <div />
                        <h1>{title}</h1>
                    </div>
                    <div className="feature__container-text">
                        <p>{text}</p>
                    </div>
                    <div className="buttons">
                        <div className="feature__container-preview-button">
                            <button>{button}</button>
                        </div>
                        <div className="feature__container-code-button">
                            <button>{codeButton}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature__container-image">
                <img src={image} />
            </div>
        </div>
    </div>
)

export default Feature