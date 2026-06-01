<section className="px-8 lg:px-20 py-24 bg-[#06101f]">

<h2 className="text-center text-5xl font-bold">
How We Work
</h2>

<div className="grid md:grid-cols-5 gap-8 mt-20">

{[
"Requirement Analysis",
"Research Planning",
"Data Collection",
"Analysis & Validation",
"Final Delivery"
].map((step,index)=>(

<div
key={index}
className="text-center"
>
<div className="w-20 h-20 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center mx-auto text-2xl">
{index+1}
</div>

<h3 className="mt-6 font-semibold text-xl">
{step}
</h3>

</div>

))}

</div>

</section>