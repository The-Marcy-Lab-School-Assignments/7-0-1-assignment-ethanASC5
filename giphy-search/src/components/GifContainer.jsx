function GifContainer({gifList}) {
    return (
        <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            {
                gifList?.map((gif, i) => (
                    <li key={i}>
                        <img src={gif.images.original.url} alt={gif['alt_text']} />
                    </li>
                ))
            }
        </ul>
    )
}

export default GifContainer






