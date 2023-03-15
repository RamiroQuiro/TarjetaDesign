import React from 'react'

export default function CardDashboard() {
  return (
    <li className="mt-2">

        <a
            className="p-5 flex flex-col justify-between
            bg-gray-100 dark:bg-gray-200 rounded-lg"
            href="#">

            <div
                className="flex items-center justify-between
                font-semibold capitalize dark:text-gray-700">

                <span>english lesson</span>

                <div className="flex items-center">
                    <svg
                        className="h-5 w-5 fill-current mr-1
                        text-gray-600"
                        viewBox="0 0 24 24">
                        <path
                            d="M14 12l-4-4v3H2v2h8v3m12-4a10
                            10 0 01-19.54 3h2.13a8 8 0
                            100-6H2.46A10 10 0 0122 12z"></path>
                    </svg>
                    <span>4.2 mi</span>
                </div>

            </div>

            <p
                className="text-sm font-medium leading-snug
                text-gray-600 my-3">
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Explicabo assumenda porro
                sapiente, cum nobis tempore delectus
                consectetur ullam reprehenderit quis ducimus,
                iusto dolor nam corporis id perspiciatis
                consequuntur saepe excepturi.
            </p>

            <div className="flex justify-between">

                <div className="flex">
                    <img
                        className="h-6 w-6 rounded-full mr-3"
                        src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
                        alt="" />
                    <span>
                        <span
                            className="text-blue-500
                            font-semibold">
                            Regina C.
                        </span>
                        via HeyTutor
                    </span>
                </div>

                <p
                    className="text-sm font-medium leading-snug
                    text-gray-600">
                    14 hours ago
                </p>

            </div>

        </a>
    </li>
  )
}
