import React from "react";

export default function Card(props) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm font-semibold">{props.label}</p>
        {/* icon */}
        <props.icon className="h-5 w-5 text-yellow" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl text-yellow font-semibold">
          {props.amount}
        </h2>
        <p className="text-xs text-gray-500">{props.discription}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props) {
  return (
    <div
      {...props}
      className={`
        flex w-full flex-col gap-3 rounded-xl border p-5 shadow
        ${props.className}
      `}
    />
  );
}
