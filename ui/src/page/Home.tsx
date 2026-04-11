import Layout from "../Layout";
function Home() {
    return (
        <Layout>
            <h1>Home</h1>
            <p>this is the preview of <a href="https://github.com/abdulari/react-demo" target="_blank">abdulari/react-demo</a> github repostiory.</p>

            <h3>Techstack</h3>
            <ul>
                <li><b>Vite</b> - Build toolchain</li>
                <li><b>React</b> - TypeScript</li>
                <li><b>Zustand</b> - State Machine</li>
                <li><b>Mantine</b> - React Component</li>
                <li><b>React Router</b> - Navigation</li>
                <li><b>React Icons</b> - Icons</li>
                <li><b>React Confetti Boom</b> - Confetti</li>
            </ul>

            <h3>Feature</h3>
            <p>all feature from the techstack can be experienced in this page, except for Confetti, Zustand and React Router</p>
            <ul>
                <li><b>Vite</b> - compile React source code into presentable HTML</li>
                <li><b>React</b> - Typescript - a strict language for better React developer experience</li>
                <li><b>Mantine</b> - a collection of Consistent, production ready, React component for faster development</li>
                <li><b>React Icons</b> - icons </li>
                <li><b>Zustand</b> - State management without need to pass around in props</li>
                <li><b>React Router</b> - handle navigation for Single Page Application</li>
                <li><b>React Confetti Boom</b> - Confetti demo to showcase Zustand state</li>
            </ul>
        </Layout>
    )
}

export default Home;