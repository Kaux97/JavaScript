package aplicacao;
	
	import java.util.Scanner;

public class programa {
	public static void programa (String []args) {
		Scanner teclado = new Scanner(System.in);
		Produto produto= new Produto();
		
		System.out.println("Informe um Produto:");
		produto.produto = teclado.next();
		
		System.out.println("Informe a Quantidade:");
		produto.quantidade = teclado.nextDouble();
		
		System.out.println("Informe um Pre�o:");
		produto.preco = teclado.nextDouble();
		
		System.out.println("Confirma��o" + produto.produto + "Estoque:" + produto.quantidade + "Pre�o: " + produto.preco);
		
		System.out.println("Deseja inserir mais produtos? Quantos:");
		int estoque = teclado.nextInt();
		produto.addProdutos(estoque);
		
		System.out.println("Atualiza��o, alguma venda foi realizada? ");
		estoque=teclado.nextInt();
		produto.subProdutos(estoque);
		
		System.out.println("Atualiza��o p�s vendas: "+produto.produto+", Estoque Atual: "+produto.quantidade+",Pre�o: "+produto.preco);
		
		
		
		
		
		
		
		
		
		
		
		
		
		teclado.close();
	}

}
