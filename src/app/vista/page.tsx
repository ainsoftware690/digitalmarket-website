"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Code,
  Zap,
  Users,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function GCCMarkets() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        background: "#0A0E27",
        color: "#fff",
        fontFamily: "'Sora', 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          padding: "120px 40px 100px",
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          minHeight: "100vh",
          animation: "slideInLeft 0.8s ease-out",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255, 107, 107, 0.1)",
              border: "1px solid rgba(255, 107, 107, 0.3)",
              borderRadius: 24,
              padding: "8px 16px",
              marginBottom: 24,
              fontSize: 13,
              fontWeight: 600,
              color: "#FF6B6B",
            }}
          >
            🚀 Expand into GCC Markets
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-2px",
            }}
          >
            Dominate the Gulf with{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FF6B6B, #FFD93D, #4ECDC4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI-Powered Growth
            </span>
          </h1>

          <p
            style={{
              color: "#b0b0c0",
              fontSize: "18px",
              lineHeight: 1.6,
              marginBottom: 32,
              maxWidth: 500,
            }}
          >
            Scale your business across Qatar, Saudi Arabia, and the UAE. We
            deliver AI-driven marketing, world-class development, and
            high-converting digital systems built for GCC markets.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" passHref>
            <button
              style={{
                padding: "16px 32px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #FF6B6B, #FF5252)",
                color: "#fff",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: 16,
                transition: "all 0.3s",
                boxShadow: "0 20px 40px rgba(255, 107, 107, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.transform = "translateY(0)")
              }
            >
              Start Your Strategy <ArrowRight size={18} />
            </button>
            </Link>
            
            <Link href="/contact" passHref>
            <button
              style={{
                padding: "16px 32px",
                borderRadius: 12,
                border: "1.5px solid rgba(255, 107, 107, 0.4)",
                background: "transparent",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 16,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background =
                  "rgba(255, 107, 107, 0.1)";
                (e.target as HTMLElement).style.borderColor =
                  "rgba(255, 107, 107, 0.6)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.borderColor =
                  "rgba(255, 107, 107, 0.4)";
              }}
            >
              Schedule Demo
            </button>
            </Link>
          </div>

          <div style={{ display: "flex", gap: 32, marginTop: 40 }}>
            {[
              { label: "150+", desc: "Projects Delivered" },
              { label: "98%", desc: "Client Success Rate" },
              { label: "24/7", desc: "Support Available" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{ fontSize: 28, fontWeight: 900, color: "#FFD93D" }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            animation: "slideInRight 0.8s ease-out",
            height: 500,
            background:
              "linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))",
            borderRadius: 20,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            color: "#888",
          }}
        >
          {/* Add your hero image here */}
          <Image
            src="/images/gcc1.jpg"
            alt="GCC Skyline"
            fill
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
            }}
          />
        </div>
      </section>

      {/* ================= MARKETS SECTION ================= */}
      <section
        id="markets"
        style={{
          padding: "100px 40px",
          maxWidth: 1400,
          margin: "0 auto",
          background:
            "linear-gradient(180deg, rgba(255, 107, 107, 0.05) 0%, transparent 100%)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              marginBottom: 16,
              letterSpacing: "-1px",
            }}
          >
            Markets We Master
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#b0b0c0",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Deep expertise and proven strategies across the GCC region
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 28,
          }}
        >
          {[
            {
              name: "Qatar",
              color: "#FF6B6B",
              image: "/images/gcc2.jpg",
              icon: "🏙️",
              desc: "Event-driven economy with premium demand and exceptional purchasing power",
              stats: ["2.5M Population", "Premium Market", "High ROI"],
            },
            {
              name: "Saudi Arabia",
              color: "#FFD93D",
              image: "/images/gcc3.jpg",
              icon: "⚡",
              desc: "Rapid digital growth powered by Vision 2030 and explosive e-commerce expansion",
              stats: ["37M Population", "Fast Growth", "Tech Hub"],
            },
            {
              name: "UAE",
              color: "#4ECDC4",
              image: "/images/gcc4.jpg",
              icon: "🚀",
              desc: "Competitive business hub with laser focus on performance and ROI-driven growth",
              stats: ["9.9M Population", "Most Competitive", "AI Leader"],
            },
          ].map((market, i) => (
            <div
              key={i}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                border: "1.5px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 16,
                overflow: "hidden",
                transition: "all 0.3s",
                cursor: "pointer",
                animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = market.color;
                e.currentTarget.style.boxShadow = `0 20px 40px ${market.color}20`;
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: 200,
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px 16px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#888",
                }}
              >
                {/* Add your market image here */}

                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 200,
                  }}
                >
                  <Image
                    src={market.image}
                    alt={market.name}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />

                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
                    }}
                  />
                </div>
              </div>

              <div style={{ padding: 32 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <span style={{ fontSize: 28 }}>{market.icon}</span>
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: market.color,
                    }}
                  >
                    {market.name}
                  </h3>
                </div>
                <p
                  style={{
                    color: "#b0b0c0",
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {market.desc}
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {market.stats.map((stat, j) => (
                    <span
                      key={j}
                      style={{
                        background: `rgba(${market.color === "#FF6B6B" ? "255, 107, 107" : market.color === "#FFD93D" ? "255, 217, 61" : "78, 205, 196"}, 0.1)`,
                        color: market.color,
                        padding: "4px 12px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section
        id="services"
        style={{
          padding: "100px 40px",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              marginBottom: 16,
              letterSpacing: "-1px",
            }}
          >
            What We Deliver
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#b0b0c0",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            End-to-end solutions built for GCC market success
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 60,
          }}
        >
          {[
            {
              icon: <TrendingUp size={32} />,
              title: "Performance Marketing",
              desc: "AI-driven campaigns with real-time optimization, lead generation, and conversion tracking",
              color: "#FF6B6B",
            },
            {
              icon: <Sparkles size={32} />,
              title: "AI Content & Video",
              desc: "Multilingual content creation, professional video production, and viral growth strategies",
              color: "#FFD93D",
            },
            {
              icon: <Code size={32} />,
              title: "Web & App Development",
              desc: "Custom web apps, mobile applications, and progressive platforms optimized for GCC users",
              color: "#4ECDC4",
            },
            {
              icon: <Zap size={32} />,
              title: "AI Automation",
              desc: "Intelligent chatbots, customer support automation, and workflow optimization",
              color: "#6C5CE7",
            },
            {
              icon: <Users size={32} />,
              title: "Social Commerce",
              desc: "Instagram Shop setup, TikTok marketing, and influencer partnerships",
              color: "#A29BFE",
            },
            {
              icon: <Globe size={32} />,
              title: "Market Strategy",
              desc: "Localization, cultural adaptation, and go-to-market planning for GCC expansion",
              color: "#FF7675",
            },
          ].map((service, i) => (
            <div
              key={i}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                border: "1.5px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 14,
                padding: 32,
                transition: "all 0.3s",
                cursor: "pointer",
                animation: `fadeInUp 0.8s ease-out ${i * 0.08}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = service.color;
                e.currentTarget.style.boxShadow = `0 20px 40px ${service.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ color: service.color, marginBottom: 16 }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>
                {service.title}
              </h3>
              <p style={{ color: "#b0b0c0", fontSize: 14, lineHeight: 1.6 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

       <div
  style={{
    width: "100%",
    height: "700px",
    position: "relative", // ✅ VERY IMPORTANT
    borderRadius: 16,
    overflow: "hidden",
    border: "1.5px solid rgba(255, 255, 255, 0.1)",
  }}
>
  <Image
    src="/images/gcc5.png"
    alt="analytics dashboard"
    fill
    style={{
      objectFit: "cover", // ✅ ONLY THIS
    }}
    priority
  />

  {/* Overlay (optional but recommended) */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.6))",
    }}
  />
</div>
      </section>


            {/* ================= WHY GCC MARKETS SECTION ================= */}
      <section id="why-gcc" style={{
        padding: "100px 40px",
        maxWidth: 1400,
        margin: "0 auto",
        background: "linear-gradient(180deg, rgba(108, 92, 231, 0.05) 0%, transparent 100%)"
      }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 900,
            marginBottom: 16,
            letterSpacing: "-1px"
          }}>
            Why GCC Markets?
          </h2>
          <p style={{
            fontSize: 18,
            color: "#b0b0c0",
            maxWidth: 700,
            margin: "0 auto"
          }}>
            The Gulf region is one of the fastest-growing digital economies, offering high-value opportunities for businesses ready to scale.
          </p>
        </div>
 
        {/* Main Content */}
        <div style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
          border: "1.5px solid rgba(255, 255, 255, 0.1)",
          borderRadius: 16,
          padding: 40,
          marginBottom: 60,
          animation: "fadeInUp 0.8s ease-out"
        }}>
          <p style={{
            fontSize: 16,
            color: "#b0b0c0",
            lineHeight: 1.8,
            marginBottom: 24
          }}>
            The GCC market presents a unique combination of <span style={{ color: "#FFD93D", fontWeight: 700 }}>high purchasing power</span>, <span style={{ color: "#FF6B6B", fontWeight: 700 }}>rapid digital adoption</span>, and <span style={{ color: "#4ECDC4", fontWeight: 700 }}>strong business growth</span>.
          </p>
          <p style={{
            fontSize: 16,
            color: "#b0b0c0",
            lineHeight: 1.8
          }}>
            Businesses in Qatar, Saudi Arabia, and the UAE are actively investing in digital transformation, creating massive opportunities for companies that can deliver performance-driven solutions.
          </p>
        </div>
 
        {/* Key Points Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24
        }}>
          {[
            {
              icon: "💰",
              title: "High Purchasing Power",
              desc: "Consumers and businesses in the GCC region have strong spending capacity, making it ideal for premium products and services.",
              color: "#FFD93D",
              bgColor: "rgba(255, 217, 61, 0.1)"
            },
            {
              icon: "⚡",
              title: "Rapid Digital Growth",
              desc: "From e-commerce to mobile-first platforms, the region is experiencing fast adoption of digital technologies.",
              color: "#4ECDC4",
              bgColor: "rgba(78, 205, 196, 0.1)"
            },
            {
              icon: "🚀",
              title: "Government-Driven Expansion",
              desc: "Initiatives like Saudi Vision 2030 are accelerating business, tech, and startup ecosystems across the region.",
              color: "#FF6B6B",
              bgColor: "rgba(255, 107, 107, 0.1)"
            },
            {
              icon: "📱",
              title: "Mobile-First Audience",
              desc: "Most users interact through mobile devices, making optimized digital experiences critical for success.",
              color: "#A29BFE",
              bgColor: "rgba(162, 155, 254, 0.1)"
            },
            {
              icon: "🎯",
              title: "Competitive Yet Scalable",
              desc: "While competition is high, businesses that implement the right strategies can scale quickly and capture market share.",
              color: "#FF7675",
              bgColor: "rgba(255, 118, 117, 0.1)"
            },
            {
              icon: "📊",
              title: "Strong ROI Potential",
              desc: "GCC businesses prioritize results-driven spending, making ROI-focused digital strategies highly rewarded.",
              color: "#6C5CE7",
              bgColor: "rgba(108, 92, 231, 0.1)"
            }
          ].map((point, i) => (
            <div key={i} style={{
              background: point.bgColor,
              border: `1.5px solid ${point.color}30`,
              borderRadius: 14,
              padding: 32,
              transition: "all 0.3s",
              cursor: "pointer",
              animation: `fadeInUp 0.8s ease-out ${i * 0.08}s both`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = point.color;
              e.currentTarget.style.boxShadow = `0 20px 40px ${point.color}20`;
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${point.color}30`;
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >
              <div style={{
                fontSize: 40,
                marginBottom: 16
              }}>
                {point.icon}
              </div>
              <h3 style={{
                fontSize: 18,
                fontWeight: 800,
                marginBottom: 12,
                color: point.color
              }}>
                {point.title}
              </h3>
              <p style={{
                color: "#b0b0c0",
                fontSize: 14,
                lineHeight: 1.6
              }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section
        style={{
          padding: "100px 40px",
          maxWidth: 1400,
          margin: "0 auto",
          background:
            "linear-gradient(180deg, rgba(78, 205, 196, 0.05) 0%, transparent 100%)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              marginBottom: 16,
              letterSpacing: "-1px",
            }}
          >
            Our Proven Process
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#b0b0c0",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            From strategy to scale in 90 days
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 32,
          }}
        >
          {[
            {
              num: "01",
              title: "Discovery & Audit",
              desc: "Market analysis, competitor research, and growth opportunity identification",
            },
            {
              num: "02",
              title: "Strategy Planning",
              desc: "Customized roadmap, channel selection, and timeline definition",
            },
            {
              num: "03",
              title: "Implementation",
              desc: "Campaign launch, content creation, and system setup",
            },
            {
              num: "04",
              title: "Optimization",
              desc: "A/B testing, analytics review, and continuous improvement",
            },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                animation: `fadeInUp 0.8s ease-out ${i * 0.12}s both`,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #FF6B6B, #FFD93D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 12,
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
                {step.title}
              </h3>
              <p style={{ color: "#b0b0c0", fontSize: 14, lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SUCCESS STORIES ================= */}
          <section style={{
        padding: "100px 40px",
        maxWidth: 1400,
        margin: "0 auto"
      }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 900,
            marginBottom: 16,
            letterSpacing: "-1px"
          }}>
            Client Success Stories
          </h2>
          <p style={{
            fontSize: 18,
            color: "#b0b0c0",
            maxWidth: 600,
            margin: "0 auto"
          }}>
            Real results from real businesses in the GCC
          </p>
        </div>
 
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24
        }}>
          {[
            {
              company: "Luxury Fashion Brand",
              image: "/images/gcc6.jpg",
              location: "UAE",
              metric: "340% ROI",
              desc: "Achieved 340% return on ad spend through AI-optimized campaigns in 6 months"
            },
            {
              company: "E-commerce Platform",
              image: "/images/gcc7.jpg",
              location: "Saudi Arabia",
              metric: "2.5M Revenue",
              desc: "Scaled to $2.5M in quarterly revenue using social commerce and influencer marketing"
            },
            {
              company: "Tech Startup",
              image: "/images/gcc8.jpg",
              location: "Qatar",
              metric: "500K Users",
              desc: "Grew user base to 500K through mobile-first app development and viral marketing"
            }
          ].map((story, i) => (
            <div key={i} style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
              border: "1.5px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 14,
              overflow: "hidden",
              animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both`,
              transition: "all 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FF6B6B";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 107, 107, 0.2)";
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >
              <div style={{
                width: "100%",
                height: 200,
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url('${story.image}')`
              }}>
                {/* Image will load from the backgroundImage property */}
              </div>
              <div style={{ padding: 28 }}>
                <div style={{
                  fontSize: 28,
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #FF6B6B, #FFD93D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 12
                }}>
                  {story.metric}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>
                  {story.company}
                </h3>
                <p style={{ color: "#888", fontSize: 12, marginBottom: 12 }}>
                  📍 {story.location}
                </p>
                <p style={{ color: "#b0b0c0", fontSize: 14, lineHeight: 1.6 }}>
                  {story.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= PRICING ================= */}
      <section
        style={{
          padding: "100px 40px",
          maxWidth: 1400,
          margin: "0 auto",
          background:
            "linear-gradient(180deg, rgba(255, 107, 107, 0.05) 0%, transparent 100%)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              marginBottom: 16,
              letterSpacing: "-1px",
            }}
          >
            Transparent Pricing
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#b0b0c0",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Flexible packages for every stage of growth
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            marginBottom: 40,
          }}
        >
          {[
            {
              name: "Startup",
              price: "5,000",
              color: "#FF6B6B",
              features: [
                "Strategy & Audit",
                "1 Campaign Setup",
                "Monthly Reporting",
                "Email Support",
              ],
            },
            {
              name: "Growth",
              price: "15,000",
              color: "#FFD93D",
              popular: true,
              features: [
                "Full Strategy",
                "3 Active Campaigns",
                "Weekly Optimization",
                "Priority Support",
                "Content Creation (10/mo)",
                "Dedicated Manager",
              ],
            },
            {
              name: "Enterprise",
              price: "Custom",
              color: "#4ECDC4",
              features: [
                "Full Service Agency",
                "Unlimited Campaigns",
                "24/7 Support",
                "Custom Development",
                "Team Training",
                "VIP Account Manager",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              style={{
                background: plan.popular
                  ? `linear-gradient(135deg, ${plan.color}15, ${plan.color}05)`
                  : "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                border: `1.5px solid ${plan.popular ? plan.color : "rgba(255, 255, 255, 0.1)"}`,
                borderRadius: 14,
                padding: 32,
                position: "relative",
                transform: plan.popular ? "scale(1.05)" : "scale(1)",
                animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both`,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.borderColor = plan.color;
                  e.currentTarget.style.boxShadow = `0 20px 40px ${plan.color}20`;
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: 20,
                    background: plan.color,
                    color: "#fff",
                    padding: "4px 12px",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  MOST POPULAR
                </div>
              )}
              <div
                style={{
                  color: plan.color,
                  fontWeight: 600,
                  fontSize: 12,
                  marginBottom: 12,
                }}
              >
                {plan.name.toUpperCase()}
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>
                {plan.price === "Custom" ? plan.price : `AED ${plan.price}`}
                {plan.price !== "Custom" && (
                  <span style={{ fontSize: 16, color: "#888" }}>/month</span>
                )}
              </div>
              <button
                style={{
                  width: "100%",
                  padding: "12px 24px",
                  borderRadius: 10,
                  background: plan.popular ? plan.color : "transparent",
                  color: plan.popular ? "#fff" : plan.color,
                  border: `1.5px solid ${plan.color}`,
                  fontWeight: 700,
                  cursor: "pointer",
                  marginBottom: 28,
                  marginTop: 20,
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.background = plan.color;
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = plan.color;
                  }
                }}
              >
                Get Started
              </button>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {plan.features.map((feature, j) => (
                  <div
                    key={j}
                    style={{ display: "flex", gap: 10, alignItems: "center" }}
                  >
                    <CheckCircle2 size={18} color={plan.color} />
                    <span style={{ fontSize: 14, color: "#b0b0c0" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div
          style={{
            padding: "60px 40px",
            maxWidth: "100%",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))",
            borderRadius: 20,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 900,
              marginBottom: 16,
              letterSpacing: "-1px",
            }}
          >
            Ready to Dominate GCC Markets?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#b0b0c0",
              marginBottom: 32,
              maxWidth: 600,
              margin: "0 auto 32px",
            }}
          >
            Join 150+ businesses already scaling with Vista. Let&apos;s build
            your winning strategy today.
          </p>
          <button
            style={{
              padding: "16px 40px",
              borderRadius: 12,
              background: "linear-gradient(135deg, #FF6B6B, #FF5252)",
              color: "#fff",
              border: "none",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 16,
              transition: "all 0.3s",
              boxShadow: "0 20px 40px rgba(255, 107, 107, 0.2)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Schedule Your Free Consultation <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
