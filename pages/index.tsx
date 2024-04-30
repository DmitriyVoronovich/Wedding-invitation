export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/invite',
            permanent: false,
        },
    }
}


export default function InnerPage() {
    return (
        <main>
            <h1>Inner Page will never show</h1>
        </main>
    )
}
