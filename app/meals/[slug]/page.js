export default function MealsSlugPage({params}) {
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                This is slug page
            </h1>
            <p>{params.slug}</p>
        </main>
    );
}
