import Layout from "../Layout";

function ReactRouterDemo() {
    return (
        <Layout>
            <h1>React Router Demo</h1>
            <p>All of the navigation in this website is the demo of the React Router.</p>
            <p>notice that for every page, the URL changed, but only the hash ?</p>
            <p>in react-router, this is called hash-router. Hash Router is the reason why Single Page Application are possible</p>
            <p>Plus, this whole website is using client side rendering. That means if you look at network tab, there is no additional loading after the page completely loaded.</p>
        </Layout>
    )
}
export default ReactRouterDemo;