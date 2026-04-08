interface OrderItem {
  name: string;
  description: string;
  price: string;
}

interface OrderConfirmationEmailProps {
  customerName?: string;
  orderNumber?: string;
  items?: OrderItem[];
  subtotal?: string;
  delivery?: string;
  total?: string;
  cardMessage?: string;
  whatsappUrl?: string;
}

export function OrderConfirmationEmail({
  customerName = "{{nome_do_cliente}}",
  orderNumber = "{{numero_do_pedido}}",
  items = [
    { name: "Lata Vermelha — 6 cookies sortidos", description: "Chocolate Belga, Churros c/ Doce de Leite, Beijinho de Coco", price: "R$ 98,00" },
    { name: "Teddy Bear", description: "Complemento do presente", price: "R$ 59,00" },
    { name: "Cartão com Mensagem", description: "Inclui cartão refinado com logo da confeitaria", price: "R$ 15,00" },
  ],
  subtotal = "R$ 172,00",
  delivery = "R$ 15,00",
  total = "R$ 187,00",
  cardMessage = "Com carinho, para tornar seu dia ainda mais doce e especial.",
  whatsappUrl = "https://wa.me/5561999999999",
}: OrderConfirmationEmailProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Confirmação de Pedido — Baunilha do Cerrado</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#F6EFE8", fontFamily: "Georgia, serif" }}>
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#F6EFE8", padding: "40px 20px" }}>
          <tbody>
            <tr>
              <td align="center">
                <table width="600" cellPadding="0" cellSpacing="0" style={{ maxWidth: "600px", width: "100%" }}>

                  {/* Header */}
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: "#5E0B13", borderRadius: "24px 24px 0 0", padding: "40px 48px", textAlign: "center" }}>
                        <p style={{ color: "#c89a57", fontSize: "11px", letterSpacing: "6px", textTransform: "uppercase", margin: "0 0 8px 0", fontFamily: "Arial, sans-serif", fontWeight: 500 }}>
                          Baunilha do Cerrado · Confeitaria
                        </p>
                        <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "1px solid rgba(200,154,87,0.3)", display: "inline-flex", alignItems: "center", justifyContent: "center", margin: "12px auto" }}>
                          <p style={{ color: "#c89a57", fontSize: "20px", fontWeight: 600, margin: 0 }}>BC</p>
                        </div>
                      </td>
                    </tr>

                    {/* Hero */}
                    <tr>
                      <td style={{ backgroundColor: "#4b0a10", padding: "48px 48px 40px", textAlign: "center" }}>
                        <p style={{ color: "#c89a57", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", margin: "0 0 16px 0", fontFamily: "Arial, sans-serif" }}>
                          Pedido recebido ✨
                        </p>
                        <h1 style={{ color: "#f1e7dd", fontSize: "36px", fontWeight: 400, margin: "0 0 16px 0", lineHeight: "1.2" }}>
                          Os melhores sabores estão a caminho.
                        </h1>
                        <div style={{ width: "48px", height: "1px", backgroundColor: "#c89a57", margin: "16px auto", opacity: 0.4 }} />
                      </td>
                    </tr>

                    {/* Greeting */}
                    <tr>
                      <td style={{ backgroundColor: "#3d0a10", padding: "32px 48px", borderBottom: "1px solid rgba(200,154,87,0.15)" }}>
                        <p style={{ color: "#e8d5b0", fontSize: "16px", margin: "0 0 12px 0", lineHeight: 1.6 }}>
                          Olá, <strong>{customerName}</strong>,
                        </p>
                        <p style={{ color: "rgba(232,213,176,0.75)", fontSize: "15px", margin: 0, lineHeight: 1.7 }}>
                          Recebemos seu pedido <strong style={{ color: "#c89a57" }}>{orderNumber}</strong> e já separamos todos os detalhes com o cuidado que esse momento merece.
                        </p>
                      </td>
                    </tr>

                    {/* Info box */}
                    <tr>
                      <td style={{ backgroundColor: "#3d0a10", padding: "0 48px 32px" }}>
                        <div style={{ backgroundColor: "rgba(200,154,87,0.1)", border: "1px solid rgba(200,154,87,0.2)", borderRadius: "16px", padding: "20px 24px" }}>
                          <p style={{ color: "#c89a57", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 8px 0", fontFamily: "Arial, sans-serif" }}>
                            Próximo passo
                          </p>
                          <p style={{ color: "#e8d5b0", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>
                            Agora é só aguardar: em breve, você receberá a confirmação com os dados de entrega ou retirada.
                          </p>
                        </div>
                      </td>
                    </tr>

                    {/* Order summary */}
                    <tr>
                      <td style={{ backgroundColor: "#f6efe8", padding: "40px 48px" }}>
                        <p style={{ color: "#4b1f1d", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", margin: "0 0 24px 0", fontFamily: "Arial, sans-serif", fontWeight: 600 }}>
                          Resumo do pedido
                        </p>

                        {items.map((item, i) => (
                          <table key={i} width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #d9c7b4" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <p style={{ color: "#4b1f1d", fontSize: "15px", fontWeight: 600, margin: "0 0 4px 0" }}>{item.name}</p>
                                  <p style={{ color: "#7a4a47", fontSize: "13px", margin: 0 }}>{item.description}</p>
                                </td>
                                <td align="right" style={{ verticalAlign: "top" }}>
                                  <p style={{ color: "#6A1018", fontSize: "16px", fontWeight: 600, margin: 0 }}>{item.price}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        ))}

                        {/* Card message */}
                        {cardMessage && (
                          <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px 20px", marginBottom: "24px", border: "1px solid #d9c7b4" }}>
                            <p style={{ color: "#c89a57", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 8px 0", fontFamily: "Arial, sans-serif" }}>
                              Mensagem do cartão
                            </p>
                            <p style={{ color: "#4b1f1d", fontSize: "14px", fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>
                              "{cardMessage}"
                            </p>
                          </div>
                        )}

                        {/* Totals */}
                        <table width="100%" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td style={{ color: "#7a4a47", fontSize: "14px", paddingBottom: "8px" }}>Subtotal</td>
                              <td align="right" style={{ color: "#7a4a47", fontSize: "14px", paddingBottom: "8px" }}>{subtotal}</td>
                            </tr>
                            <tr>
                              <td style={{ color: "#7a4a47", fontSize: "14px", paddingBottom: "16px" }}>Entrega</td>
                              <td align="right" style={{ color: "#7a4a47", fontSize: "14px", paddingBottom: "16px" }}>{delivery}</td>
                            </tr>
                            <tr>
                              <td colSpan={2} style={{ borderTop: "1px solid #d9c7b4", paddingTop: "16px" }} />
                            </tr>
                            <tr>
                              <td style={{ color: "#4b1f1d", fontSize: "18px", fontWeight: 600, paddingTop: "4px" }}>Total</td>
                              <td align="right" style={{ color: "#6A1018", fontSize: "20px", fontWeight: 700, paddingTop: "4px" }}>{total}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Support */}
                    <tr>
                      <td style={{ backgroundColor: "#eadbcd", padding: "32px 48px" }}>
                        <p style={{ color: "#7a4a47", fontSize: "14px", margin: "0 0 20px 0", lineHeight: 1.7 }}>
                          Se precisar de qualquer assistência com seu pedido, basta responder este e-mail ou falar com a gente pelo WhatsApp. Estamos aqui para cuidar de tudo com você.
                        </p>
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td>
                                <a
                                  href={whatsappUrl}
                                  style={{
                                    display: "inline-block",
                                    backgroundColor: "#c89a57",
                                    color: "#4b1f1d",
                                    fontSize: "11px",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    fontWeight: 600,
                                    padding: "14px 28px",
                                    borderRadius: "100px",
                                    textDecoration: "none",
                                    fontFamily: "Arial, sans-serif",
                                  }}
                                >
                                  Falar no WhatsApp
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td style={{ backgroundColor: "#3d0a10", borderRadius: "0 0 24px 24px", padding: "32px 48px", textAlign: "center" }}>
                        <p style={{ color: "#e8d5b0", fontSize: "15px", fontWeight: 500, margin: "0 0 4px 0" }}>
                          Baunilha do Cerrado Confeitaria
                        </p>
                        <p style={{ color: "rgba(232,213,176,0.5)", fontSize: "12px", margin: "0 0 20px 0" }}>
                          Delicadeza, sabor e apresentação impecável.
                        </p>
                        <div style={{ width: "32px", height: "1px", backgroundColor: "rgba(200,154,87,0.3)", margin: "0 auto 16px" }} />
                        <p style={{ color: "rgba(232,213,176,0.35)", fontSize: "11px", margin: 0, fontFamily: "Arial, sans-serif" }}>
                          © 2025 Baunilha do Cerrado. Todos os direitos reservados.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
