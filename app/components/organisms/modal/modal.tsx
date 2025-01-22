export const Modal = ({ onClose }) => {
    return (
        <div className="container">
            <div className="overlay" onClick={onClose} />
            <section className="containerInner">
                <h2 className ="header">Modal title</h2>
                <button
                onClick={onClose}
                type="button"
                aria-label="閉じる"
                className="iconClose"
                >
                    x
                </button>
                <p className="contents">
                    業務内容
                    後でデータクラス的なのに各々入れておく
                </p>
                <div className="buttonContainer">
                    <button
                    onClick={onClose}
                    type="button"
                    className="button closeButton"
                    >
                        close
                    </button>
                    <button type="button" className="button nextButton">
                        Secondary Action
                    </button>
                </div>
            </section>
            </div>
    );
};