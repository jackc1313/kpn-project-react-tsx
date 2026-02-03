//scritta grande e foto
interface MainComponentProps {
  catchphrase: string;
  imageSrc: string;
}

export default function MainComponent({ catchphrase, imageSrc }: MainComponentProps){
    return (
        <div>
            <h1 className="maintext">{catchphrase}</h1>
            <img src={imageSrc} alt={catchphrase} />
        </div>
    )
}