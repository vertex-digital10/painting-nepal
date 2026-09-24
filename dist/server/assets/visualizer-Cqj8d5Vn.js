import { a as PRICING, c as whatsappLink, i as NEPAL_PALETTE, l as Button, n as FINISHES, o as ROOM_TYPES, r as LIGHTING } from "./router-CouuoSF9.js";
import { n as Input, t as Label } from "./label-Xvu8-uFf.js";
import { t as LeadForm } from "./LeadForm-D7RPfMY2.js";
import { Suspense, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Calculator, CloudSun, MessageCircle, Moon, Sparkles, Sun, Sunset } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
//#region src/components/site/RoomScene.tsx
var LIGHT_PRESETS = {
	Morning: {
		sky: "#fff1d6",
		key: "#ffd9a3",
		intensity: 1,
		ambient: .55
	},
	Afternoon: {
		sky: "#ffffff",
		key: "#ffffff",
		intensity: 1.25,
		ambient: .7
	},
	Evening: {
		sky: "#ffd1a8",
		key: "#ff8e5e",
		intensity: .9,
		ambient: .45
	},
	Night: {
		sky: "#2b3550",
		key: "#9bb0ff",
		intensity: .55,
		ambient: .25
	}
};
function finishMaterial(color, finish) {
	switch (finish) {
		case "Matte": return {
			color,
			roughness: .95,
			metalness: 0,
			clearcoat: 0
		};
		case "Satin": return {
			color,
			roughness: .55,
			metalness: .02,
			clearcoat: .15
		};
		case "Gloss": return {
			color,
			roughness: .15,
			metalness: .08,
			clearcoat: .9,
			clearcoatRoughness: .05
		};
		case "Luxury Texture": return {
			color,
			roughness: .8,
			metalness: .05,
			clearcoat: .25,
			sheen: .6
		};
	}
}
function Wall({ position, rotation, size, color, finish }) {
	const mat = finishMaterial(color, finish);
	return /* @__PURE__ */ jsxs("mesh", {
		position,
		rotation,
		receiveShadow: true,
		children: [/* @__PURE__ */ jsx("planeGeometry", { args: size }), /* @__PURE__ */ jsx("meshPhysicalMaterial", {
			...mat,
			side: THREE.DoubleSide
		})]
	});
}
function Furniture() {
	return /* @__PURE__ */ jsxs("group", { children: [
		/* @__PURE__ */ jsxs("mesh", {
			position: [
				0,
				-1.45,
				-.6
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
				3.2,
				.7,
				1.2
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: "#2c3e57",
				roughness: .85
			})]
		}),
		/* @__PURE__ */ jsxs("mesh", {
			position: [
				0,
				-.95,
				-1.05
			],
			castShadow: true,
			children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
				3.2,
				.6,
				.3
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: "#2c3e57",
				roughness: .85
			})]
		}),
		/* @__PURE__ */ jsxs("mesh", {
			position: [
				-1,
				-.95,
				-.55
			],
			castShadow: true,
			children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
				.55,
				.45,
				.35
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: "#e8a33d",
				roughness: .9
			})]
		}),
		/* @__PURE__ */ jsxs("mesh", {
			position: [
				1,
				-.95,
				-.55
			],
			castShadow: true,
			children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
				.55,
				.45,
				.35
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: "#c4623b",
				roughness: .9
			})]
		}),
		/* @__PURE__ */ jsxs("mesh", {
			position: [
				0,
				-1.55,
				.6
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
				1.4,
				.08,
				.7
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: "#5a3a26",
				roughness: .4,
				metalness: .05
			})]
		}),
		/* @__PURE__ */ jsxs("mesh", {
			position: [
				-2.4,
				-1.05,
				-.2
			],
			castShadow: true,
			children: [/* @__PURE__ */ jsx("cylinderGeometry", { args: [
				.05,
				.05,
				1.8,
				12
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", { color: "#1c1f25" })]
		}),
		/* @__PURE__ */ jsxs("mesh", {
			position: [
				-2.4,
				.05,
				-.2
			],
			castShadow: true,
			children: [/* @__PURE__ */ jsx("coneGeometry", { args: [
				.35,
				.5,
				16
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: "#f4f1ea",
				emissive: "#ffd9a3",
				emissiveIntensity: .25
			})]
		}),
		/* @__PURE__ */ jsxs("mesh", {
			position: [
				2.3,
				-1.4,
				.4
			],
			castShadow: true,
			children: [/* @__PURE__ */ jsx("cylinderGeometry", { args: [
				.25,
				.35,
				.4,
				12
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", { color: "#3c4147" })]
		}),
		/* @__PURE__ */ jsxs("mesh", {
			position: [
				2.3,
				-.9,
				.4
			],
			castShadow: true,
			children: [/* @__PURE__ */ jsx("sphereGeometry", { args: [
				.55,
				24,
				24
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: "#3f5e48",
				roughness: 1
			})]
		})
	] });
}
function ArtFrame() {
	return /* @__PURE__ */ jsxs("group", {
		position: [
			0,
			.6,
			-2.45
		],
		children: [/* @__PURE__ */ jsxs("mesh", {
			castShadow: true,
			children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
				1.4,
				.9,
				.04
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: "#1c1f25",
				roughness: .4
			})]
		}), /* @__PURE__ */ jsxs("mesh", {
			position: [
				0,
				0,
				.025
			],
			children: [/* @__PURE__ */ jsx("planeGeometry", { args: [1.3, .8] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: "#efe3cb",
				roughness: .5
			})]
		})]
	});
}
function AutoTilt() {
	const ref = useRef(null);
	useFrame((s) => {
		if (!ref.current) return;
		const t = s.clock.getElapsedTime();
		ref.current.rotation.y = Math.sin(t * .15) * .05;
	});
	return null;
}
function RoomScene({ wallColor, ceilingColor, floorColor, finish, lighting }) {
	const preset = LIGHT_PRESETS[lighting];
	const wallSize = useMemo(() => [6, 4], []);
	return /* @__PURE__ */ jsxs(Canvas, {
		shadows: true,
		camera: {
			position: [
				0,
				.5,
				5.5
			],
			fov: 50
		},
		dpr: [1, 2],
		children: [
			/* @__PURE__ */ jsx("color", {
				attach: "background",
				args: [preset.sky]
			}),
			/* @__PURE__ */ jsx("ambientLight", { intensity: preset.ambient }),
			/* @__PURE__ */ jsx("directionalLight", {
				position: [
					3,
					4,
					3
				],
				intensity: preset.intensity,
				color: preset.key,
				castShadow: true,
				"shadow-mapSize": [1024, 1024]
			}),
			/* @__PURE__ */ jsx("pointLight", {
				position: [
					-2.4,
					.05,
					-.2
				],
				intensity: lighting === "Night" ? 1.2 : .3,
				color: "#ffd9a3",
				distance: 6
			}),
			/* @__PURE__ */ jsxs(Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ jsx(Wall, {
						position: [
							0,
							0,
							-2.5
						],
						rotation: [
							0,
							0,
							0
						],
						size: wallSize,
						color: wallColor,
						finish
					}),
					/* @__PURE__ */ jsx(Wall, {
						position: [
							-3,
							0,
							0
						],
						rotation: [
							0,
							Math.PI / 2,
							0
						],
						size: [5, 4],
						color: wallColor,
						finish
					}),
					/* @__PURE__ */ jsx(Wall, {
						position: [
							3,
							0,
							0
						],
						rotation: [
							0,
							-Math.PI / 2,
							0
						],
						size: [5, 4],
						color: wallColor,
						finish
					}),
					/* @__PURE__ */ jsx(Wall, {
						position: [
							0,
							2,
							0
						],
						rotation: [
							Math.PI / 2,
							0,
							0
						],
						size: [6, 5],
						color: ceilingColor,
						finish: "Matte"
					}),
					/* @__PURE__ */ jsx(Wall, {
						position: [
							0,
							-2,
							0
						],
						rotation: [
							-Math.PI / 2,
							0,
							0
						],
						size: [6, 5],
						color: floorColor,
						finish: "Satin"
					}),
					/* @__PURE__ */ jsx(ArtFrame, {}),
					/* @__PURE__ */ jsx(Furniture, {}),
					/* @__PURE__ */ jsx(ContactShadows, {
						position: [
							0,
							-1.99,
							0
						],
						opacity: .4,
						scale: 8,
						blur: 2.4,
						far: 3
					}),
					/* @__PURE__ */ jsx(Environment, { preset: lighting === "Night" ? "night" : lighting === "Evening" ? "sunset" : "city" }),
					/* @__PURE__ */ jsx(AutoTilt, {})
				]
			}),
			/* @__PURE__ */ jsx(OrbitControls, {
				enablePan: false,
				minDistance: 3.5,
				maxDistance: 8,
				minPolarAngle: Math.PI / 3.5,
				maxPolarAngle: Math.PI / 2.05,
				target: [
					0,
					-.2,
					0
				]
			})
		]
	});
}
//#endregion
//#region src/routes/visualizer.tsx?tsr-split=component
var SUGGESTIONS = [
	{
		name: "Modern",
		colors: [
			"#F4F1EA",
			"#3B6E8F",
			"#E97A5A"
		]
	},
	{
		name: "Luxury",
		colors: [
			"#2A3D66",
			"#E8A33D",
			"#EFE3CB"
		]
	},
	{
		name: "Minimalist",
		colors: [
			"#F4F1EA",
			"#C9CDD2",
			"#3C4147"
		]
	},
	{
		name: "Scandinavian",
		colors: [
			"#FFFFFF",
			"#D9E2EC",
			"#9CB29A"
		]
	},
	{
		name: "Contemporary",
		colors: [
			"#EFE3CB",
			"#3F5E48",
			"#C4623B"
		]
	},
	{
		name: "Nepali Home",
		colors: [
			"#E8A33D",
			"#C4623B",
			"#2A3D66"
		]
	}
];
var LightIcon = {
	Morning: Sun,
	Afternoon: CloudSun,
	Evening: Sunset,
	Night: Moon
};
function VisualizerPage() {
	const [wall, setWall] = useState(NEPAL_PALETTE[3].hex);
	const [ceiling, setCeiling] = useState("#F4F1EA");
	const [floor, setFloor] = useState("#A07655");
	const [finish, setFinish] = useState("Satin");
	const [lighting, setLighting] = useState("Afternoon");
	const [roomType, setRoomType] = useState("Living Room");
	const [length, setLength] = useState(14);
	const [width, setWidth] = useState(12);
	const [height, setHeight] = useState(9);
	const [planTier, setPlanTier] = useState("Standard");
	const calc = useMemo(() => {
		const totalSqft = 2 * (length + width) * height + length * width;
		const plan = PRICING.find((p) => p.tier === planTier);
		const labor = totalSqft * plan.pricePerSqft;
		const material = labor * .6;
		return {
			totalSqft,
			labor,
			material,
			total: labor + material,
			days: Math.max(3, Math.round(totalSqft / 250)),
			plan
		};
	}, [
		length,
		width,
		height,
		planTier
	]);
	const paletteName = NEPAL_PALETTE.find((c) => c.hex.toUpperCase() === wall.toUpperCase())?.name;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "gradient-hero",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent",
					children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }), " Virtual Paint Studio"]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-3 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl",
					children: "🎨 Virtual Paint Your Room"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
					children: "Try colors, finishes and lighting on a live 3D room. Get an instant Kathmandu paint cost — no signup, no payment."
				})
			]
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-6 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative h-[460px] overflow-hidden rounded-3xl border border-border shadow-elegant sm:h-[560px]",
					children: [
						/* @__PURE__ */ jsx(RoomScene, {
							wallColor: wall,
							ceilingColor: ceiling,
							floorColor: floor,
							finish,
							lighting
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "pointer-events-none absolute left-4 top-4 rounded-full glass-strong px-3 py-1.5 text-xs font-semibold text-foreground",
							children: [
								roomType,
								" • ",
								finish,
								" • ",
								lighting
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "pointer-events-none absolute right-4 top-4 flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs font-semibold text-foreground",
							children: [/* @__PURE__ */ jsx("span", {
								className: "h-3 w-3 rounded-full border border-border",
								style: { backgroundColor: wall }
							}), paletteName ?? wall.toUpperCase()]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full glass-strong px-3 py-1.5 text-[11px] text-muted-foreground",
							children: "Drag to rotate • scroll to zoom"
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ jsx(Panel, {
							title: "Room type",
							children: /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: ROOM_TYPES.map((r) => /* @__PURE__ */ jsx(Pill, {
									active: r === roomType,
									onClick: () => setRoomType(r),
									children: r
								}, r))
							})
						}),
						/* @__PURE__ */ jsxs(Panel, {
							title: "Wall color",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-6 gap-2 sm:grid-cols-8",
								children: NEPAL_PALETTE.map((c) => /* @__PURE__ */ jsx("button", {
									onClick: () => setWall(c.hex),
									title: c.name,
									"aria-label": c.name,
									className: `aspect-square rounded-xl border-2 transition ${wall.toUpperCase() === c.hex.toUpperCase() ? "border-accent scale-110" : "border-border hover:scale-105"}`,
									style: { backgroundColor: c.hex }
								}, c.hex))
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-3 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("input", {
									type: "color",
									value: wall,
									onChange: (e) => setWall(e.target.value),
									className: "h-10 w-12 cursor-pointer rounded-lg border border-border bg-transparent"
								}), /* @__PURE__ */ jsx(Input, {
									value: wall.toUpperCase(),
									onChange: (e) => setWall(e.target.value),
									className: "font-mono",
									maxLength: 9
								})]
							})]
						}),
						/* @__PURE__ */ jsx(Panel, {
							title: "Ceiling & floor",
							children: /* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									className: "text-xs",
									children: "Ceiling"
								}), /* @__PURE__ */ jsxs("div", {
									className: "mt-1 flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("input", {
										type: "color",
										value: ceiling,
										onChange: (e) => setCeiling(e.target.value),
										className: "h-10 w-12 rounded-lg border border-border"
									}), /* @__PURE__ */ jsx(Input, {
										value: ceiling.toUpperCase(),
										onChange: (e) => setCeiling(e.target.value),
										className: "font-mono text-xs"
									})]
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									className: "text-xs",
									children: "Floor"
								}), /* @__PURE__ */ jsxs("div", {
									className: "mt-1 flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("input", {
										type: "color",
										value: floor,
										onChange: (e) => setFloor(e.target.value),
										className: "h-10 w-12 rounded-lg border border-border"
									}), /* @__PURE__ */ jsx(Input, {
										value: floor.toUpperCase(),
										onChange: (e) => setFloor(e.target.value),
										className: "font-mono text-xs"
									})]
								})] })]
							})
						}),
						/* @__PURE__ */ jsx(Panel, {
							title: "Finish",
							children: /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: FINISHES.map((f) => /* @__PURE__ */ jsx(Pill, {
									active: f === finish,
									onClick: () => setFinish(f),
									children: f
								}, f))
							})
						}),
						/* @__PURE__ */ jsx(Panel, {
							title: "Lighting",
							children: /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-4 gap-2",
								children: LIGHTING.map((l) => {
									const Icon = LightIcon[l];
									return /* @__PURE__ */ jsxs("button", {
										onClick: () => setLighting(l),
										className: `flex flex-col items-center gap-1 rounded-xl border-2 px-2 py-3 text-xs font-semibold transition ${l === lighting ? "border-accent bg-accent/10 text-foreground" : "border-border bg-card text-foreground/80 hover:bg-secondary"}`,
										children: [
											/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
											" ",
											l
										]
									}, l);
								})
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-xl font-bold text-foreground",
						children: "AI color recommendations"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Tap a style to apply a curated palette."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: SUGGESTIONS.map((s) => /* @__PURE__ */ jsxs("button", {
							onClick: () => {
								setWall(s.colors[1]);
								setCeiling(s.colors[0]);
								setFloor(s.colors[2]);
							},
							className: "group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left transition hover:-translate-y-0.5 hover:shadow-card",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex -space-x-2",
								children: s.colors.map((c) => /* @__PURE__ */ jsx("span", {
									className: "h-9 w-9 rounded-full border-2 border-card shadow-sm",
									style: { backgroundColor: c }
								}, c))
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-sm font-bold text-foreground",
								children: s.name
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground group-hover:text-accent",
								children: "Apply palette →"
							})] })]
						}, s.name))
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-12 grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-accent",
						children: [/* @__PURE__ */ jsx(Calculator, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold uppercase tracking-widest",
							children: "Paint Cost Estimator"
						})]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-2 font-display text-2xl font-black text-foreground",
						children: "Instant Kathmandu estimate"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Enter your room size and pick a plan."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								className: "text-xs",
								children: "Length (ft)"
							}), /* @__PURE__ */ jsx(Input, {
								type: "number",
								value: length,
								onChange: (e) => setLength(Number(e.target.value) || 0)
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								className: "text-xs",
								children: "Width (ft)"
							}), /* @__PURE__ */ jsx(Input, {
								type: "number",
								value: width,
								onChange: (e) => setWidth(Number(e.target.value) || 0)
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								className: "text-xs",
								children: "Height (ft)"
							}), /* @__PURE__ */ jsx(Input, {
								type: "number",
								value: height,
								onChange: (e) => setHeight(Number(e.target.value) || 0)
							})] })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ jsx(Label, {
							className: "text-xs",
							children: "Plan"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1 grid grid-cols-3 gap-2",
							children: PRICING.map((p) => /* @__PURE__ */ jsxs("button", {
								onClick: () => setPlanTier(p.tier),
								className: `rounded-xl border-2 px-3 py-2 text-center text-xs font-bold transition ${planTier === p.tier ? "border-accent bg-accent/10" : "border-border bg-background hover:bg-secondary"}`,
								children: [p.tier, /* @__PURE__ */ jsxs("div", {
									className: "text-[10px] font-medium text-muted-foreground",
									children: [
										"NPR ",
										p.pricePerSqft,
										"/sqft"
									]
								})]
							}, p.tier))
						})]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl gradient-primary p-6 text-primary-foreground shadow-elegant",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-bold uppercase tracking-widest opacity-80",
							children: "Estimated Project Cost"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-2 font-display text-4xl font-black",
							children: ["NPR ", Math.round(calc.total).toLocaleString()]
						}),
						/* @__PURE__ */ jsxs("dl", {
							className: "mt-5 grid grid-cols-2 gap-4 text-sm",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "opacity-70 text-xs",
									children: "Paintable area"
								}), /* @__PURE__ */ jsxs("dd", {
									className: "font-display text-lg font-bold",
									children: [Math.round(calc.totalSqft).toLocaleString(), " sqft"]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "opacity-70 text-xs",
									children: "Duration"
								}), /* @__PURE__ */ jsxs("dd", {
									className: "font-display text-lg font-bold",
									children: [calc.days, " days"]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "opacity-70 text-xs",
									children: "Labor"
								}), /* @__PURE__ */ jsxs("dd", {
									className: "font-display text-lg font-bold",
									children: ["NPR ", Math.round(calc.labor).toLocaleString()]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "opacity-70 text-xs",
									children: "Material"
								}), /* @__PURE__ */ jsxs("dd", {
									className: "font-display text-lg font-bold",
									children: ["NPR ", Math.round(calc.material).toLocaleString()]
								})] })
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-xs opacity-75",
							children: "Estimate based on standard wall coverage. Final price confirmed after free site visit."
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-12 grid gap-6 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-accent",
						children: "Save your design"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-2 font-display text-3xl font-black text-foreground",
						children: "Book a free site visit"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground",
						children: "We'll bring real paint samples in your chosen colors and confirm the estimate on-site."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ jsx(Button, {
							asChild: true,
							className: "gradient-accent text-accent-foreground",
							children: /* @__PURE__ */ jsxs("a", {
								href: whatsappLink(`Hi, I designed a ${roomType} in ${paletteName ?? wall} (${finish}). Please send a quote.`),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "mr-2 h-4 w-4" }), " WhatsApp my design"]
							})
						}), /* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: "outline",
							className: "border-2",
							children: /* @__PURE__ */ jsxs("a", {
								href: "#lead-form",
								children: ["Get free quote ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})]
					})
				] }), /* @__PURE__ */ jsx("div", {
					id: "lead-form",
					className: "rounded-3xl border border-border bg-card p-6 shadow-card",
					children: /* @__PURE__ */ jsx(LeadForm, {
						source: "visualizer",
						defaultService: `Visualizer – ${roomType}`,
						extra: {
							room_type: roomType,
							selected_color: paletteName ?? wall,
							finish_type: finish,
							estimated_area_sqft: Math.round(calc.totalSqft),
							estimated_cost_npr: Math.round(calc.total),
							plan_tier: planTier
						},
						compact: true
					})
				})]
			})
		]
	})] });
}
function Panel({ title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-border bg-card p-5 shadow-card",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
			children: title
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-3",
			children
		})]
	});
}
function Pill({ active, children, onClick }) {
	return /* @__PURE__ */ jsx("button", {
		onClick,
		className: `rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition ${active ? "border-accent bg-accent/10 text-foreground" : "border-border bg-background text-foreground/80 hover:bg-secondary"}`,
		children
	});
}
//#endregion
export { VisualizerPage as component };
