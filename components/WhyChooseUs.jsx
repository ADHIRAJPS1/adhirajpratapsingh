<section className="px-8 lg:px-20 py-24">

<h2 className="text-center text-5xl font-bold">
Why Choose Us
</h2>

<div className="grid md:grid-cols-3 gap-8 mt-16">

{[
"Research Driven",
"Data Accuracy",
"Fast Delivery",
"Affordable Pricing",
"Dedicated Support",
"Confidential & Secure"
].map((item,index)=>(

<div
key={index}
className="p-8 rounded-3xl border border-[#1d2d45]"
>
<h3 className="text-2xl font-semibold">
{item}
</h3>
</div>

))}

</div>

</section>