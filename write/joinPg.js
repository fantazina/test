export default function Join(){
    return (
        <div className="p-20">
            <h4>회원가입</h4>
            <form action="/api/post/new2" method="POST">
                <button type="submit">가입</button>
            </form>
        </div>
    )
}