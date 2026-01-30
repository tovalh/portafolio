'use client'

import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { SKILLS, ABOUT_TEXT } from '../../constants';

export default function Skills () {
    return (
        <section id="skills" className="py-24 bg-dark relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-violet-900/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-16 items-center">

                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                            Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Stack</span>
                        </h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed font-light text-lg">
                            <p>
                                {ABOUT_TEXT}
                            </p>
                            <p>
                                Creo firmemente en elegir la herramienta adecuada para el trabajo, pero estas son las tecnologías con las que me siento más productivo y creativo.
                            </p>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="h-[400px] w-full bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                layout="vertical"
                                data={SKILLS}
                                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                            >
                                <XAxis type="number" domain={[0, 100]} hide />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    width={100}
                                    tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'monospace' }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <Tooltip
                                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                                    itemStyle={{ color: '#22d3ee' }}
                                />
                                <Bar dataKey="level" barSize={20} radius={[0, 4, 4, 0]}>
                                    {SKILLS.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8b5cf6' : '#22d3ee'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            </div>
        </section>
    );
};