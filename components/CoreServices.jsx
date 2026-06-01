<section className="px-8 lg:px-20 py-24 bg-[#06101f]">

<h2 className="text-center text-5xl font-bold">
Our Core Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

{[
"Market Research",
"Business Research",
"Consulting",
"Data Analytics",
"Competitor Analysis",
"Survey Research",
"Academic Research",
"Startup Validation"
].map((service,index)=>(

<div
key={index}
className="bg-[#0c1728] p-8 rounded-3xl border border-[#1e2c42] hover:border-yellow-500 transition"
>
<h3 className="text-2xl font-semibold">
{service}
</h3>

<p className="text-gray-400 mt-4">
Professional research and strategic insights tailored to your goals.
</p>

</div>

))}

</div>

</section>