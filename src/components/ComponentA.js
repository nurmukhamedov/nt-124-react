import Footer from './Footer/Footer';
function ComponentA() {
    return (
        <div>

            Component A
            <Footer />
            {
                console.log('Hello World')
            }
        </div>
    )
}
export default ComponentA;