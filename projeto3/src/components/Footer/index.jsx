import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} - Operação em andamento...
                <br />
                Bella Ciao 🎭
            </p>
        </footer>
    )
}