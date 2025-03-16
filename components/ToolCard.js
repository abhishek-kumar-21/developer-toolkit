import Image from "next/image";
import Link from "next/link";

const ToolCard = ({ imageSrc, title, description }) => {
    const path = `${imageSrc.split(".")[0]}`; // Ensures the correct URL format

    return (
        <div className="max-w-sm h-[380px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <Link href={path} target="_blank">
                <Image
                    className="rounded-t-lg w-full h-[200px] object-cover"
                    src={imageSrc}
                    alt={title}
                    width={400} // Define fixed width for better optimization
                    height={200} // Define fixed height for better optimization
                />
            </Link>

            <div className="p-5">
                <Link href={path} target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
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
