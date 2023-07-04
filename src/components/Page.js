import Logo from "./Logo";

export default function Page({children}){
    return(
    <>
        <Logo />
        {children}
        <div></div>
    </>
    );
}