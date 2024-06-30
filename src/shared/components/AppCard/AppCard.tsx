import { shortedText } from '@/shared/utils/shortedText';
import './style.scss';
import Image from 'next/image';

interface IPropsAppCard {
    [key: string]: string;
}

export const AppCard = ({
    title,
    image = "/images/posts/post-1.png",
    href = "/",
    desc,
    date,
    tag,
}: IPropsAppCard) => {
    return (
        <div className="post-item">
            <a href={href}>
                <div className="post-item__img">
                    <Image height={229} width={380} src={image} alt="" />
                </div>
                <div className="post-item-content">
                    <div className="post-item__title">{title}</div>
                    <div className="post-item__desc">{shortedText(desc)}</div>
                    <div className="post-item-bottom">
                        <div className="post-item__date">{date}</div>
                        <div className="post-item__site">{tag}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}