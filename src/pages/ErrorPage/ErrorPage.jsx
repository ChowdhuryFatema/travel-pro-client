import { Player, Controls } from '@lottiefiles/react-lottie-player';

const ErrorPage = () => {
    return (
        <div>
            <h2>Page not found</h2>
            {/* <img src="https://lottie.host/embed/bcf655c4-a9fc-45c6-92f3-0210358be9c9/muKaygrXhu.json" alt="" /> */}

            <Player
                autoplay
                loop
                src="https://lottie.host/embed/bcf655c4-a9fc-45c6-92f3-0210358be9c9/muKaygrXhu.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    );
};

export default ErrorPage;