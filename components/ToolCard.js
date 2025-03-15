import Image from 'next/image';
import Link from 'next/link';

const ToolCard = ({ imageSrc, title, description }) => {
    const path = imageSrc.substring(0, imageSrc.lastIndexOf("."))

    return (
        <div className="max-w-sm h-[380px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link href={path} target='_blank'>
                <img className="rounded-t-lg w-full h-[200px] object-cover" src={imageSrc} alt={title} />
            </Link>

            <div className="p-5">
                <Link href={path} target='_blank'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </Link>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ToolCard;
