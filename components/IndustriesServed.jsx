<section className="px-8 lg:px-20 py-24">

<h2 className="text-center text-5xl font-bold">
Industries We Serve
</h2>

<div className="grid md:grid-cols-3 gap-8 mt-16">

{[
"Fashion Industry",
"FinTech",
"Software & IT",
"E-Commerce",
"Education",
"Healthcare"
].map((industry,index)=>(

<div
key={index}
className="p-10 rounded-3xl bg-[#071224] border border-[#1d2d45]"
>
<h3 className="text-3xl font-semibold">
{industry}
</h3>
</div>

))}

</div>

</section>